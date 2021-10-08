class User < ApplicationRecord
  has_many :products
  has_many :posts
  has_many :comments, through: :posts
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  validates :is_admin, inclusion: { in: [true, false] }
end
