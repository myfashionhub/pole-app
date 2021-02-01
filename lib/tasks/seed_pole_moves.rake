require 'csv'

namespace :seed do
  desc 'Create pole moves'
  task :pole_moves => [:environment] do
    file_content = File.read("#{Rails.root}/lib/tasks/pole-moves.csv")
    move_data = CSV.parse(file_content)
    move_data.shift # Get rid of headers

    move_data.each do |row|
      next if row.compact.length != 4
      parse_pole_move(row)
    end
  end
end

def parse_pole_move(row)
  pole_modes = row[1] == 'Both' ? 'spin_static' : row[1].downcase

  puts "pole_modes #{pole_modes}, #{row[3].downcase}"
  pole_move = PoleMove.find_or_create_by(
    name: row[0],
    pole_modes: pole_modes,
    level: row[3].downcase
  )
  puts pole_move.attributes

  tag_names = row[2].split(',').each { |name| name.squish! }
  tag_names.each do |tag_name|
    puts "tag_name #{tag_name.inspect}"
    tag = Tag.find_by(name: tag_name)
    join = TagPoleMove.find_or_create_by(
      tag_id: tag.id,
      pole_move_id: pole_move.id,
    )
  end
end
