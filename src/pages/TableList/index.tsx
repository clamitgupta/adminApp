import React, { useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { TableListItem } from './data.d';
import { queryRule } from './service';

const TableList: React.FC = () => {
  
  const actionRef = useRef<ActionType>();

  const intl = useIntl();

  const columns: ProColumns<TableListItem>[] = [
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.nameLabel"
          defaultMessage="Title"
        />
      ),
      dataIndex: 'title',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleDesc" defaultMessage="Description" />,
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id="pages.searchTable.isComplete" defaultMessage="Completed" />,
      dataIndex: 'isComplete',
    }
  ];

  return (
    <PageContainer>
      <ProTable<TableListItem>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '查询表格',
        })}
        actionRef={actionRef}
        request={() => queryRule()}
        columns={columns}
        search={false}
      />
    </PageContainer>
  );
};

export default TableList;
