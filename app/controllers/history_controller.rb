class HistoryController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    history = History.find(user_id: params[:user_id])
  end

  def create
    history = History.create(history_params)
  end

  private
  def history_params
    params.require(:history).permit(:pole_move_id, :user_id, :practiced)
  end
end
