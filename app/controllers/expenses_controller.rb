class ExpensesController < ApplicationController
  before_action :set_expense, only: [:show, :update, :destroy]

  def index
    @expenses = Expense.order(date: :desc)
    # need something to order by date desc
    render json: @expenses
  end

  def show
    render json: @expense, status: 200
  end

  def create
    # @expense = @category.expense.build(expense_params)
    @expense = Expense.new(expense_params)
    if @expense.save
      @expenses = Expense.order(date: :desc)
      # need something here to order by date
      render json: @expenses, status: 201
    else
      render_errors_in_json
    end
  end

  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render_errors_in_json
    end
  end

  def destroy
    @expense.destroy
    :no_content
  end

  private

  def set_expense
    @expense = Expense.find(params[:id])
    if !@expense
      render json: { message: "Expense not found"}, status: 404
    end
  end

  def render_errors_in_json
    render json: {
      errors: {
        messages: @expense.errors.messages
      }
    }, status: 422
  end

  def expense_params
    params.require(:expense).permit(:date, :amount, :description, :reimburse_percent, :paid, :category_ids => [], :category_attributes => [:name]
    )
  end

end
