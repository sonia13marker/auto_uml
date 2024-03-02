import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useServerData from '../hooks/useServerData';

jest.mock('axios');

test('fetches server data successfully', async () => {
  const mockData = { message: 'Mock server data' };
  axios.get.mockResolvedValue({ data: mockData });

  const { result, waitForNextUpdate } = renderHook(() => useServerData('http://192.168.1.66/api/data'));

  await waitForNextUpdate();

  expect(result.current).toEqual(mockData);
});

test('handles errors when fetching server data', async () => {
  const errorMessage = 'Server error';
  axios.get.mockRejectedValue(new Error(errorMessage));

  const { result, waitForNextUpdate } = renderHook(() => useServerData('https://192.168.1.66/api/data'));

  await waitForNextUpdate();

  expect(result.error).toEqual(new Error(errorMessage));
});
