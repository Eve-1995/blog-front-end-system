define({ "api": [
  {
    "type": "delete",
    "url": "/user/delete",
    "title": "删除",
    "description": "<p>该操作将触发级联删除, 如用户的收藏记录等一并删除.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"userId\": \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 210": [
          {
            "group": "Success 210",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 212": [
          {
            "group": "Error 212",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"删除失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "DeleteUserDelete"
  },
  {
    "type": "get",
    "url": "/user/actionStatus",
    "title": "用户是否已对文章操作过",
    "description": "<p>获取用户是否已点赞、收藏过该文章</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\",\n \"articleId\": \"6\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 210": [
          {
            "group": "Success 210",
            "type": "string",
            "optional": false,
            "field": "hasCollect",
            "description": "<p>是否已收藏</p>"
          },
          {
            "group": "Success 210",
            "type": "string",
            "optional": false,
            "field": "hasLike",
            "description": "<p>是否已点赞</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"hasCollect\": true,\n  \"hasLike\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "GetUserActionstatus"
  },
  {
    "type": "get",
    "url": "/user/findByFilter",
    "title": "根据用户名查找用户",
    "description": "<p>包含个人信息以及点赞总数、收藏总数、评论总数.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"name\": \"E\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "[{\n  \"id\": 1,\n  \"nickname\": \"Eve\",\n  \"createTime\": \"2019-05-01T09:05:15.958Z\",\n  \"updateTime\": \"2019-05-04T16:42:38.000Z\",\n  \"phone\": \"177****4863\",\n  \"realname\": \"前夕\",\n  \"email\": \"948832626@qq.com\",\n  \"liveCity\": \"上海\",\n  \"hometown\": \"温州\",\n  \"birth\": \"1995-09-17\",\n  \"company\": \"上海易校信息科技有限公司\",\n  \"univercity\": \"浙江水利水电学院\",\n  \"eduacation\": \"本科\",\n  \"likeAmount\": 2,\n  \"collectAmount\": 8,\n  \"commentAmount\": 9\n}]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateTime",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "liveCity",
            "description": "<p>居住城市</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hometown",
            "description": "<p>家乡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "univercity",
            "description": "<p>大学</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eduacation",
            "description": "<p>教育程度</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "likeAmount",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "collectAmount",
            "description": "<p>收藏总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "commentAmount",
            "description": "<p>评论总数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "GetUserFindbyfilter"
  },
  {
    "type": "get",
    "url": "/user/findTableInfo",
    "title": "获取全部用户信息",
    "description": "<p>包含个人信息以及点赞总数、收藏总数、评论总数.</p>",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "[{\n  \"id\": 1,\n  \"nickname\": \"Eve\",\n  \"createTime\": \"2019-05-01T09:05:15.958Z\",\n  \"updateTime\": \"2019-05-04T16:42:38.000Z\",\n  \"phone\": \"177****4863\",\n  \"realname\": \"前夕\",\n  \"email\": \"948832626@qq.com\",\n  \"liveCity\": \"上海\",\n  \"hometown\": \"温州\",\n  \"birth\": \"1995-09-17\",\n  \"company\": \"上海易校信息科技有限公司\",\n  \"univercity\": \"浙江水利水电学院\",\n  \"eduacation\": \"本科\",\n  \"likeAmount\": 2,\n  \"collectAmount\": 8,\n  \"commentAmount\": 9\n}]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateTime",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "liveCity",
            "description": "<p>居住城市</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hometown",
            "description": "<p>家乡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "univercity",
            "description": "<p>大学</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eduacation",
            "description": "<p>教育程度</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "likeAmount",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "collectAmount",
            "description": "<p>收藏总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "commentAmount",
            "description": "<p>评论总数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "GetUserFindtableinfo"
  },
  {
    "type": "get",
    "url": "/user/getCollections",
    "title": "获取用户的收藏集合",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "name",
            "description": "<p>文章名</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "likeAmount",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "collectAmount",
            "description": "<p>收藏总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "commentAmount",
            "description": "<p>评论总数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "[{\n  \"id\": 6,\n  \"name\": \"Angular从入门到放弃\",\n  \"likeAmount\": \"2\",\n  \"collectAmount\": \"9\",\n  \"commentAmount\": \"8\",\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "GetUserGetcollections"
  },
  {
    "type": "get",
    "url": "/user/getUser",
    "title": "获取单个用户信息",
    "description": "<p>只获取用户实体信息</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n \"id\": 1,\n \"nickname\": \"Eve\",\n \"createTime\": \"2019-05-01T09:05:15.958Z\",\n \"updateTime\": \"2019-05-04T16:42:38.000Z\",\n \"phone\": \"177****4863\",\n \"realname\": \"前夕\",\n \"email\": \"948832626@qq.com\",\n \"liveCity\": \"上海\",\n \"hometown\": \"温州\",\n \"birth\": \"1995-09-17\",\n \"company\": \"上海易校信息科技有限公司\",\n \"univercity\": \"浙江水利水电学院\",\n \"eduacation\": \"本科\",\n \"likeAmount\": 2,\n \"collectAmount\": 8,\n \"commentAmount\": 9\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateTime",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "liveCity",
            "description": "<p>居住城市</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hometown",
            "description": "<p>家乡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "univercity",
            "description": "<p>大学</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eduacation",
            "description": "<p>教育程度</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "likeAmount",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "collectAmount",
            "description": "<p>收藏总数</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "commentAmount",
            "description": "<p>评论总数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "GetUserGetuser"
  },
  {
    "type": "post",
    "url": "/user/collect",
    "title": "收藏文章",
    "description": "<p>若用户未收藏过此文章则执行收藏操作, 反之取消收藏</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"userId\": 1,\n \"articleId\": 6\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 210": [
          {
            "group": "Success 210",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"收藏成功\"\n}",
          "type": "json"
        },
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"取消收藏成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "PostUserCollect"
  },
  {
    "type": "post",
    "url": "/user/collect",
    "title": "点赞文章",
    "description": "<p>若用户未点赞过此文章则执行点赞操作, 反之取消点赞</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"userId\": 1,\n \"articleId\": 6\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 210": [
          {
            "group": "Success 210",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "用户未点赞",
          "content": "{\n  \"message\": \"点赞成功\"\n}",
          "type": "json"
        },
        {
          "title": "用户已点赞",
          "content": "{\n  \"message\": \"取消点赞成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "PostUserCollect"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登陆",
    "description": "<p>使用Postman等工具发送只带帐号不带密码的请求有彩蛋.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example   ",
          "content": "{\n \"userId\": 1,\n \"articleId\": 6\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>用户类别 0:普通用户,1:管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createTime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateTime",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "liveCity",
            "description": "<p>居住城市</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hometown",
            "description": "<p>家乡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "univercity",
            "description": "<p>大学</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eduacation",
            "description": "<p>教育程度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"id\": 1,\n  \"nickname\": \"Eve\",\n  \"createTime\": \"2019-05-01T09:05:15.958Z\",\n  \"updateTime\": \"2019-05-04T16:42:38.000Z\",\n  \"phone\": \"177****4863\",\n  \"level\": \"1\",\n  \"realname\": \"前夕\",\n  \"email\": \"948832626@qq.com\",\n  \"liveCity\": \"上海\",\n  \"hometown\": \"温州\",\n  \"birth\": \"1995-09-17\",\n  \"company\": \"上海易校信息科技有限公司\",\n  \"univercity\": \"浙江水利水电学院\",\n  \"eduacation\": \"本科\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 211": [
          {
            "group": "Error 211",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ],
        "Error 666": [
          {
            "group": "Error 666",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"帐号或密码不正确\"\n}",
          "type": "json"
        },
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"恭喜你获得[四魂之玉碎片I * 1]!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/save",
    "title": "注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "liveCity",
            "description": "<p>居住城市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "hometown",
            "description": "<p>家乡</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "birth",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "univercity",
            "description": "<p>大学</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "eduacation",
            "description": "<p>教育程度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"nickname\": \"Eve\",\n \"phone\": \"17712345678\",\n \"password\": \"huangmenji\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 210": [
          {
            "group": "Success 210",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 211": [
          {
            "group": "Error 211",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>提示文本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"手机号已存在\"\n}",
          "type": "json"
        },
        {
          "title": "Response-Example",
          "content": "{\n  \"message\": \"发生未知错误, 请私信博主具体情况\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/user/user.controller.ts",
    "groupTitle": "User",
    "name": "PostUserSave"
  }
] });
