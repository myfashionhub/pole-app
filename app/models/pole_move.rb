class PoleMove < ApplicationRecord
  # https://naturaily.com/blog/ruby-on-rails-enum
  enum level: [:beginner, :intermediate, :advance]
  enum pole_mode: [:spin, :static, :spin_static]

  validates :name, presence: true
end
