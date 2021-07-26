export type QueryConfigurationId = string;

export type QuerySearchTerm = string;

export type QueryConfiguration = {
  id: QueryConfigurationId;
  searchTerm: QuerySearchTerm;
  loading: boolean;
  error: boolean;
  message: string;
};

export type Errorseverity = 'error' | 'info' | 'warning' | 'success';

export type ErrorMessage = string;

export type ErrorType = {
  severity: Errorseverity;
  message: ErrorMessage;
};
