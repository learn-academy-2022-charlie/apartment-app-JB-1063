class ApartmentsController < ApplicationController

    def index
        apartments = Apartments.all
        render json: apartments
    end

end
