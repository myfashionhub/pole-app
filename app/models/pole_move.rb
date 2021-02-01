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
end
