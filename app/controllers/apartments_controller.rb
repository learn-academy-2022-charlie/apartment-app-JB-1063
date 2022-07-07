class ApartmentsController < ApplicationController

    def index
        @apartments = Apartments.all
end
