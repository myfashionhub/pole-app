class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    item = Item.find_or_create_by(item_params)
  end

  private
  def item_params
    params.require(:item).permit(
      :name, :brand, :price, :store_id,
      :price_range, :clothing_category, :weather_category, :utility_category,
      :wear_frequency, :discard_reason, :date_purchase, :date_discarded,
    )
  end
end
