import { User } from "../types/global";

/**
 * Filters an array of users based on the provided filters.
 *
 * @param users - The array of users to filter.
 * @param filters - An object containing the filter criteria.
 * @returns The filtered array of users.
 * @deprecated deprecated use filterUsersV2 :).
 */

export function filterUsers(
  users: User[],
  filters: { [key: string]: string }
): User[] {
  return users.filter((user) => {
    return (
      user.name.toLocaleLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );
  });
}

/**
 * Filters an array of users based on the provided filters.
 *
 * @param users - The array of users to filter.
 * @param filters - An object containing the filter criteria.
 * @returns The filtered array of users.
 * 
 */

export function filterUsersV2(
  users: User[],
  filters: { [key: string]: string }
): User[] {
  return users.filter((user) => {
    return Object.keys(filters).every((key) => {
      return String(user[key as keyof User])
        .toLowerCase()
        .includes(filters[key].toLowerCase());
    });
  });
}
