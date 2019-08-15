// eslint-disable
// this is an auto generated file. This will be overwritten

export const getStudentCard = `query GetStudentCard($id: ID!) {
  getStudentCard(id: $id) {
    id
    username
    studentNumber
  }
}
`;
export const listStudentCards = `query ListStudentCards(
  $filter: ModelStudentCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      studentNumber
    }
    nextToken
  }
}
`;
export const getAccelerometer = `query GetAccelerometer($id: ID!) {
  getAccelerometer(id: $id) {
    studentNumber
    x
    y
    z
  }
}
`;
export const listAccelerometers = `query ListAccelerometers(
  $filter: ModelAccelerometerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccelerometers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      studentNumber
      x
      y
      z
    }
    nextToken
  }
}
`;
export const getGyroscope = `query GetGyroscope($id: ID!) {
  getGyroscope(id: $id) {
    studentNumber
    x
    y
    z
  }
}
`;
export const listGyroscopes = `query ListGyroscopes(
  $filter: ModelGyroscopeFilterInput
  $limit: Int
  $nextToken: String
) {
  listGyroscopes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      studentNumber
      x
      y
      z
    }
    nextToken
  }
}
`;
export const getMagnetometer = `query GetMagnetometer($id: ID!) {
  getMagnetometer(id: $id) {
    studentNumber
    x
    y
    z
  }
}
`;
export const listMagnetometers = `query ListMagnetometers(
  $filter: ModelMagnetometerFilterInput
  $limit: Int
  $nextToken: String
) {
  listMagnetometers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      studentNumber
      x
      y
      z
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    studentNumber
    longitude
    latitude
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      studentNumber
      longitude
      latitude
    }
    nextToken
  }
}
`;
export const getReport = `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    name
    description
    longitude
    latitude
  }
}
`;
export const listReports = `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      longitude
      latitude
    }
    nextToken
  }
}
`;
