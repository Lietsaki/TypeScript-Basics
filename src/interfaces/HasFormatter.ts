export interface HasFormatter {
  // Objects using this interface must have a format method that returns a string
  format(): string
}