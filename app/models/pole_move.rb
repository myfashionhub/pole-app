class PoleMove < ApplicationRecord
  has_many :tags, :through => :tags_pole_moves

  validates :name, presence: true, uniqueness: true

  def find_or_create_by(params)
    pole_move = PoleMove.find_by(params)

    if pole_move.nil?
      pole_move = PoleMove.create(params)
    end

    pole_move
  end

  def self.get_moves_with_tags(pole_moves)
    pole_moves.map do |pole_move|
      tag_joins = TagPoleMove.where(pole_move_id: pole_move.id)

      data = pole_move.attributes
      data[:tag_ids] = tag_joins.map { |j| j.tag_id }.uniq
      data
    end
  end
end
