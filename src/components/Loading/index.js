import { Alert, Flex, Spin } from 'antd';
export default function Loading() {
    return (
        <Flex gap="small">
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Flex>
    );
}
