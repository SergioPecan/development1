import { Employee } from './employee.entity';

describe('EmployeeEntity', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
