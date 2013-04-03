FactoryGirl.define do
	factory :user do
		name "Adam Waxman"
		email "awaxman11@gmail.com"
		password "foobar"
		password_confirmation "foobar"
	end
end