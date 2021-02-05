//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
export enum ActionType{
    search_repositories = 'search_repositories',
    search_repositories_success = 'search_repositories_success',
    search_repositories_error = 'search_repositories_error'
}