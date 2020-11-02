class Item < ApplicationRecord
  # https://naturaily.com/blog/ruby-on-rails-enum
  enum price_range: [:u50, :u100, :u200]
  enum clothing_category: [:top, :bottoms, :one_piece, :intimates, :footwear]
  enum weather_category: [:cold, :warm, :fair]
  enum utility_category: [:special_occasion, :work, :casual, :active]
  enum wear_frequency: [:monthly, :quarterly, :yearly] # a few times
  enum discard_reason: [:fit, :comfort, :occasion, :interest] # lack of

  validates :name, presence: true
end
