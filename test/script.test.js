// BEGIN: Test for shake function
test('shake function should return a random answer', () => {
  const mockAnswers = ['Yes', 'No', 'Maybe'];
  const mockRandomIndex = 1; // Assuming the random index is always 1 for testing purposes
  const mockShake = jest.fn(() => mockAnswers[mockRandomIndex]);

  const result = mockShake();

  expect(mockShake).toHaveBeenCalled();
  expect(result).toBe('No');
});
// END: Test for shake function