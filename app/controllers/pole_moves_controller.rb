class PoleMovesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    # All pole moves for current user
    history = History.find_by(user_id: session[:user_id])
    if history.nil?
      @pole_moves = []
    else
      pole_move_ids = history.map { |h| h.pole_move_id }
      @pole_moves = PoleMove.where(id: pole_move_ids)
    end
  end

  def create
    pole_move = PoleMove.find_or_create_by(pole_move_params)
  end

  def search
  end

  private
  def pole_move_params
    params.require(:pole_move).permit(
      :name, :description, :alias, :level, :pole_mode,
    )
  end
end
