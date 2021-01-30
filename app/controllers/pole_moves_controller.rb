class PoleMovesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    pole_moves = PoleMove.all.to_a
  end

  def create
    pole_move = PoleMove.find_or_create_by(pole_move_params)
  end

  private
  def pole_move_params
    params.require(:pole_move).permit(
      :name, :description, :alias, :level, :pole_mode,
    )
  end
end
