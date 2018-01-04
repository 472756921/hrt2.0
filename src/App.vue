<template>
  <div class="layout">
    <Layout style="height: 100%">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1">
            <Icon type="flag"></Icon>
            <span>轮播管理</span>
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              <span>公告管理</span>
            </template>
            <MenuItem name="2-1"><Icon type="arrow-swap"></Icon><span>滚动公告</span></MenuItem>
            <MenuItem name="2-1"><Icon type="videocamera"></Icon><span>直播公告</span></MenuItem>
            <MenuItem name="2-2"><Icon type="briefcase"></Icon><span>公司动态</span></MenuItem>
            <MenuItem name="2-3"><Icon type="android-contacts"></Icon><span>团队资讯</span></MenuItem>
            <MenuItem name="2-4"><Icon type="happy"></Icon><span>俱乐部活动</span></MenuItem>
          </Submenu>
          <MenuItem name="3">
            <Icon type="person-stalker"></Icon>
            <span>团队管理</span>
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-basketball"></Icon>
            <span>相关活动</span>
          </MenuItem>
          <MenuItem name="5">
            <Icon type="ios-home"></Icon>
            <span>患者家园</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
          <div class="title_A" style="float: left"><img src="./img/icon/logo.png" width=45 style="vertical-align: middle;"/> 哈瑞特信息发布平台</div>
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
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isCollapsed: false
      }
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
