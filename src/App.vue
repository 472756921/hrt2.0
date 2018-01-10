<template>
  <div class="layout">
    <Layout style="height: 100%" v-if="type">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1" theme="dark" width="auto" :class="menuitemClasses" @on-select="go">
          <MenuItem name="/cour">
            <Icon type="flag"></Icon>
            <span>轮播管理</span>
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              <span>最新资讯</span>
            </template>
            <MenuItem name="/scroll"><Icon type="arrow-swap"></Icon><span>滚动公告</span></MenuItem>
            <MenuItem name="/a_list/live"><Icon type="videocamera"></Icon><span>直播公告</span></MenuItem>
            <MenuItem name="/a_list/company"><Icon type="briefcase"></Icon><span>公司动态</span></MenuItem>
            <MenuItem name="/a_list/team"><Icon type="android-contacts"></Icon><span>专家团队</span></MenuItem>
            <MenuItem name="/a_list/culb"><Icon type="happy"></Icon><span>团队活动通知</span></MenuItem>
            <MenuItem name="/a_list/date"><Icon type="ios-alarm-outline"></Icon><span title="团队面诊时间设置">团队面诊时间设置</span></MenuItem>
            <MenuItem name="/a_list/remb"><Icon type="ios-basketball"></Icon><span>活动记录</span></MenuItem>
            <MenuItem name="/addAn"><Icon type="edit"></Icon><span>添加资讯</span></MenuItem>
          </Submenu>

          <!--<Submenu name="3">-->
            <!--<template slot="title">-->
              <!--<Icon type="ios-list-outline"></Icon>-->
              <!--<span>文章管理</span>-->
            <!--</template>-->
            <!--<MenuItem name="/article/ac">-->
              <!--<Icon type="ios-basketball"></Icon>-->
              <!--<span>团队活动记录</span>-->
            <!--</MenuItem>-->
            <!--<MenuItem name="/article/home">-->
              <!--<Icon type="ios-home"></Icon>-->
              <!--<span>患者家园</span>-->
            <!--</MenuItem>-->
            <!--<MenuItem name="/addarticle">-->
              <!--<Icon type="edit"></Icon>-->
              <!--<span title="添加文章">添加文章</span>-->
            <!--</MenuItem>-->
          <!--</Submenu>-->

          <Submenu name="4">
            <template slot="title">
              <Icon type="android-people"></Icon>
              <span>团队管理</span>
            </template>
            <MenuItem name="/t_list"><Icon type="person-stalker"></Icon><span>团队列表</span></MenuItem>
            <MenuItem name="/add_t"><Icon type="plus"></Icon><span>添加团队</span></MenuItem>
          </Submenu>

          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              <span>健管师管理</span>
            </template>
            <MenuItem name="/m_list"><Icon type="clipboard"></Icon><span title="健管师管理列表">健管师管理列表</span></MenuItem>
            <MenuItem name="/add_m"><Icon type="plus"></Icon><span title="添加健管师管理">添加健管师管理</span></MenuItem>
          </Submenu>

          <Submenu name="6">
            <template slot="title">
              <Icon type="android-cart"></Icon>
              <span>商品管理</span>
            </template>
            <MenuItem name="/c_list"><Icon type="clipboard"></Icon><span title="商品列表">商品列表</span></MenuItem>
            <MenuItem name="/add_c"><Icon type="plus"></Icon><span title="添加商品">添加商品</span></MenuItem>
          </Submenu>

        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
          <div class="title_A" style="float: left"><img src="./img/icon/logo.png" width=45 style="vertical-align: middle;"/> 哈瑞特管理系统</div>
          <div style="float: right">
            <Avatar style="background-color: #87d068" icon="person" />
            <Dropdown trigger="click" style="margin-left: 5px">
              <a href="javascript:void(0)">刘德华 <Icon type="arrow-down-b"></Icon></a>
              <DropdownMenu slot="list">
                <DropdownItem>修改密码</DropdownItem>
                <DropdownItem>个人资料</DropdownItem>
                <DropdownItem>安全退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Header>
        <Content :style="{padding: '16px'}">
          <Card>
            <div style="height: 100%">
              <router-view></router-view>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
    <login v-if="!type"/>
  </div>
</template>
<script>
  import login from './page/login.vue';

  export default {
    components: { login },
    data () {
      return {
        type: false,
        isCollapsed: false
      }
    },
    created(){
      this.getClesses();
    },
    watch: {
      '$route': ['getClesses'],
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      getClesses() {
        if(this.$route.name == 'login') {
          this.type = false;
        } else {
          this.type = true;
        }
      },
      go(name) {
        this.$router.push({path: name});
      },
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      }
    }
  }
</script>
<style scoped>
  .title_A{
    font-size: 18px;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu div{
     width: 0px;
     transition: width .2s ease;
   }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .collapsed-menu div > i:nth-child(3){
    font-size: 80px;
  }
  .collapsed-menu ul li {
    padding-left: 24px!important;
  }
  .l_down{
    cursor: pointer;
  }
</style>
<style>
  .ivu-menu-submenu-title-icon{
    margin-right: 12px!important;
  }
</style>
