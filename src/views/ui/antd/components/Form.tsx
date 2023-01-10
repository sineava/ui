import { Table, Tag, Form, Input, InputNumber, Card, Button, Space, Drawer, Select } from 'antd'
import { useRef, useState } from 'react'
import _ from 'lodash'
const Item = Form.Item

let dataSource = [
  {
    id: 1,
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    sex: 1
  },
  {
    id: 2,
    name: '范冰冰',
    age: 42,
    address: '西湖区湖底公园1号',
    sex: 0
  }
]
const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  age: [{ required: true, message: '请输入姓名' }],
  address: [{ required: true, message: '请输入姓名' }],
  sex: [{ required: true, message: '请选择性别' }]
}

const AddOrEdit = ({ id, save, open, close, primary }: any) => {
  const [form] = Form.useForm()
  const formRef: any = useRef(null)
  const submit = async () => {
    const values = await formRef.current.validateFields()
    save({ id, ...values })
    close()
  }
  const initial = () => {
    return id ? dataSource.find((item: any) => item.id === id) : {}
  }
  return (
    <Drawer width={400} title={id ? '编辑用户' : '新增用户'} placement="right" onClose={close} open={open} extra={
      <Space>
        <Button onClick={close}>取消</Button>
        <Button style={{backgroundColor: primary} as React.CSSProperties} type="primary" onClick={submit}>保存</Button>
      </Space>
    }>
      <Form initialValues={initial()} ref={formRef} layout="vertical" form={form} onFinish={submit}>
        <Item name="name" label="姓名：" rules={rules['name']}>
          <Input placeholder="请输入" />
        </Item>
        <Item name="age" label="年龄：" rules={rules['age']}>
          <InputNumber className="w-full" placeholder="请输入" min={0} max={100} />
        </Item>
        <Item name="address" label="住址：" rules={rules['address']}>
          <Input placeholder="请输入" />
        </Item>
        <Item name="sex" label="性别：" rules={rules['sex']}>
          <Select
            className="w-full"
            allowClear
            options={[
              {
                value: 1,
                label: '男'
              },
              {
                value: 0,
                label: '女',
              }
            ]}
          />
        </Item>
      </Form>
    </Drawer>
  )
}

export default ({ primary }: { primary: string }) => {
  const columns: any = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '住址', dataIndex: 'address', key: 'address' },
    { title: '性别', dataIndex: 'sex', key: 'sex',
      render: (_: unknown, { sex }: { sex: number }) => {
        const map = new Map([[0, { sex: '女', color: 'success' }], [1, { sex: '男', color: 'processing' }]])
        const item: any = map.get(sex)
        return typeof sex === 'number' ? <Tag color={item.color}>{item.sex}</Tag> : null
      }
    },
    { title: '操作', dataIndex: 'action', key: 'option', width: 10,
      render(_: any, { id }: { id: number }) {
        return (
          <Space>
            <Button type="primary" onClick={() => edit(id)}>编辑</Button>
            <Button type="primary" onClick={() => remove(id)} danger>删除</Button>
          </Space>
        )
      }
    }
  ]

  const [form] = Form.useForm()
  const [id, setId]: any = useState(null)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(dataSource)
  const formRef: any = useRef(null)
  const search = () => {
    const { name } = form.getFieldsValue()
    name ? setData(dataSource.filter((item: any) => item.name.includes(name))) : setData(dataSource)
  }
  const reset = () => {
    formRef.current.resetFields()
    setData(dataSource)
  }
  const save = (row?: any) => {
    if (row.id) {
      const index = dataSource.findIndex((item: any) => item.id === row.id)
      dataSource[index] = { ...row }
    } else {
      dataSource = [...dataSource, {...row, id: dataSource.length + 1}]
    }
    setData(_.cloneDeep(dataSource))
    close()
  }
  const edit = (id?: number) => {
    id && setId(id)
    setOpen(true)
  }
  const remove = (id: number) => {
    dataSource = dataSource.filter((item) => item.id !== id)
    setData(dataSource)
  }
  const close = () => {
    setId(null)
    setOpen(false)
  }
  return (
    <Card className="mr-2">
      <Form ref={formRef} form={form} layout="inline">
        <Item name="name" label="姓名：">
          <Input placeholder="请输入" />
        </Item>
        <Item><Button type="primary" onClick={() => edit()}>新增</Button></Item>
        <Item><Button type="primary" onClick={search}>搜索</Button></Item>
        <Item><Button onClick={reset}>重置</Button></Item>
      </Form>
      <Table className="mt-4" rowKey="id" dataSource={data} columns={columns} />
      { open && <AddOrEdit primary={primary} id={id} open={true} save={save} close={close} destroyOnClose /> }
    </Card>
  )
}