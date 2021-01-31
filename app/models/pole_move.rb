class PoleMove < ApplicationRecord
  # https://naturaily.com/blog/ruby-on-rails-enum
  enum level: [:beginner, :intermediate, :advance]
  enum pole_mode: [:spin, :static, :spin_static]

  has_many :tags, :through => :tags_pole_moves

  validates :name, presence: true

  def find_or_create_by(params)
    pole_move = PoleMove.find_by(params)

    if pole_move.nil?
      pole_move = PoleMove.create(params)
    end

    pole_move
  end
end
