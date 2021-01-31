class TagPoleMove < ApplicationRecord
  self.table_name = 'tags_pole_moves'

  belongs_to :pole_move
  belongs_to :tag

  def find_or_create_by(params)
    tag_pole_move = TagPoleMove.find_by(params)

    if tag_pole_move.nil?
      tag_pole_move = TagPoleMove.create(params)
    end

    tag_pole_move
  end
end
