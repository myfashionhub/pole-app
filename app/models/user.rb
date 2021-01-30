class User < ApplicationRecord
  has_many :history
  has_many :pole_moves, :through => :history

  validates :email, uniqueness: true
end
