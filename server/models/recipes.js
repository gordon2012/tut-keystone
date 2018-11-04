var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

var Recipe = new keystone.List('Recipe', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-createdAt'
});

var recipeImgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('server/public/img'),
    generateFilename: function(file, index) {
      return file.originalname;
    },
    whenExists: 'error',
    publicPath: '/public/img'
  }
});

Recipe.add({
  name: {
    type: String,
    required: true
  },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft'
  },
  author: { type: Types.Relationship, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  publishedAt: Date,
  image: {
    type: Types.File,
    storage: recipeImgStorage,
    mimetype: '.jpeg, .jpg, .gif, .svg'
  },
  ingredientList: {
    type: Types.Html,
    wysiwyg: true,
    height: 150
  },
  cookingInstructions: {
    type: Types.Html,
    wysiwyg: true,
    height: 500
  }
});

Recipe.defaultColumns = 'name, state|20%, author, publishedAt|15%';
Recipe.register();
