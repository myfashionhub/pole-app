class Tag < ApplicationRecord
  has_many :pole_moves, :through => :tags_pole_moves

  def find_or_create_by(params)
    tag = Tag.find_by(name: params[:name])

    if tag.nil?
      tag = Tag.create(params)
    end

    tag
  end
end
