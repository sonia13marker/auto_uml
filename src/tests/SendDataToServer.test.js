import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useSendDataToServer from '../hooks/useSendDataToServer';

jest.mock('axios');

describe('useSendDataToServer', () => {
  test('sends data to server successfully', async () => {
    const mockData = { message: 'Data sent successfully' };
    axios.post.mockResolvedValue({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() => useSendDataToServer('https://192.168.1.66/api/send'));

    await waitForNextUpdate();

    expect(result.current).toEqual(mockData);
  });

  test('handles errors when sending data to server', async () => {
    const errorMessage = 'Server error';
    axios.post.mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useSendDataToServer('https://192.168.1.66/api/send'));

    await waitForNextUpdate();

    expect(result.error).toBeDefined();
  });
});
