class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :type
      t.string :image_url
      t.string :review
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
