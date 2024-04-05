interface AbiType {
  typeId: number;
  type: string;
  components: AbiType[] | null;
  typeParameters: number[] | null;
}

interface FunctionAttribute {
  name: string;
  arguments: string[];
}

interface FunctionParameter {
  name: string;
  type: number;
  typeArguments: number[] | null;
}

interface ContractFunction {
  inputs: FunctionParameter[];
  name: string;
  output: FunctionParameter;
  attributes: FunctionAttribute[];
}

interface LoggedType {
  logId: number;
  loggedType: {
    name: string;
    type: number;
    typeArguments: any[];
  };
}

interface StorageSlot {
  key: string;
  value: string;
}

export interface TokenAbi {
  types: AbiType[];
  functions: ContractFunction[];
  loggedTypes: LoggedType[];
  storageSlots: StorageSlot[];
}

export interface TokenAbiInterface {
  decimals(asset: string): Promise<number>;
  name(asset: string): Promise<string>;
  symbol(asset: string): Promise<string>;
  total_assets(): Promise<number>;
  total_supply(asset: string): Promise<number>;
  burn(sub_id: string, amount: number): Promise<void>;
  mint(recipient: string, sub_id: string, amount: number): Promise<void>;
}
