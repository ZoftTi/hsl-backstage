import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const currentYear = new Date().getFullYear();
  return <DefaultFooter copyright={`${currentYear} 红树林教育科技后台管理系统`} links={false} />;
};
