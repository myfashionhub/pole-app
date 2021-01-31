class TagPoleMove < ApplicationRecord
  self.table_name = 'tags_pole_moves'

  belongs_to :pole_move
  belongs_to :tag
end
