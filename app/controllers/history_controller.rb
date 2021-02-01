class HistoryController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    histories = History.where(user_id: params[:user_id])
    pole_moves = PoleMove.where('id IN (?)', histories.map { |h| h.pole_move_id })
    pole_move_data = PoleMove.get_moves_with_tags(pole_moves)

    respond_to do |format|
      format.json { render json: { pole_moves: pole_move_data }}
    end
  end

  def create
    puts params
    history = History.create(
      user_id: params[:user_id],
      pole_move_id: params[:move_id]
    )

    respond_to do |format|
      format.json { render json: { history: history }}
    end
  end

  private
  def history_params
    params.require(:history).permit(:pole_move_id, :user_id, :practiced)
  end
end
