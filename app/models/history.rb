class History < ApplicationRecord
  self.table_name = 'history'

  belongs_to :user
  belongs_to :pole_move

  validates :pole_move_id, uniqueness: { scope: [:user_id, :practiced] }
end
