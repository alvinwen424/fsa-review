const {
  STRING,
  TEXT,
  ENUM,
  ARRAY
} = require('sequelize');
const db = require('./db')

const Page = db.define('page', {
  title: {
    type: STRING,
    allowNull: false
  },
  urlTitle: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: TEXT,
    allowNull: false
  },
  status: {
    type: ENUM('open', 'closed')
  },
  tags: {
    type: ARRAY(TEXT)
  }
}, {
  hooks: {
    beforeValidate: function (page) {
      if (page.title) {
        page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
      }
    }
  },
  getterMethods: {
    route: function () {
      return '/wiki/' + this.urlTitle;
    }
  },
  classMethods: {
    findByTag: function (tag) {
      return Page.findAll({
        where: {
          tags: {
            $overlap: [tag]
          }
        }
      })
    }
  },
  instanceMethods: {
    findSimilar: function () {
      return Page.findAll({
        where: {
          tags: {
            $overlap: this.tags
          },
          id: {
            $ne: this.id
          }
        }
      })
    }
  }
})


module.exports = Page;
