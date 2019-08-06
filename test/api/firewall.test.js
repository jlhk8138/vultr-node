const util = require('../util')

const mock = {
  ruleList: {
    '1': {
      rulenumber: 1,
      action: 'accept',
      protocol: 'icmp',
      port: '',
      subnet: '',
      subnet_size: 0,
      notes: ''
    },
    '2': {
      rulenumber: 2,
      action: 'accept',
      protocol: 'tcp',
      port: '80',
      subnet: '10.234.22.0',
      subnet_size: 24,
      notes: 'example'
    }
  }
}

const mockParameters = {
  ruleList: {
    FIREWALLGROUPID: '1234abcd',
    direction: 'in',
    ip_type: 'v4'
  },
  deleteGroup: {
    FIREWALLGROUPID: '1234abcd'
  }
}

util.createTestSuite('firewall', mock, mockParameters)
