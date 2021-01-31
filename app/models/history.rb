class History < ApplicationRecord
  self.table_name = 'history'

  belongs_to :user
  belongs_to :pole_move
end
