import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} 红树林教育科技后台管理系统`}
      links={
        [
          // {
          //     key: 'Ant Design Pro',
          //     title: 'Ant Design Pro',
          //     href: 'https://pro.ant.design',
          //     blankTarget: true,
          // },
          // {
          //     key: 'github',
          //     title: <GithubOutlined />,
          //     href: 'https://github.com/ant-design/ant-design-pro',
          //     blankTarget: true,
          // },
          // {
          //     key: 'Ant Design',
          //     title: 'Ant Design',
          //     href: 'https://ant.design',
          //     blankTarget: true,
          // },
        ]
      }
    />
  );
};
