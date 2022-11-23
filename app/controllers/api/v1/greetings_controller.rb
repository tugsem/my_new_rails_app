module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @rand_message = GreetingMessage.find(GreetingMessage.pluck(:id).sample)
        render json: @rand_message
      end
    end
  end
end
