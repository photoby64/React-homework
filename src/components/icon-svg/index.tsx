import { IconProp } from '@/types/icon';

export function IconMinus({ size = 16, fill = '#000' }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 6 2"
      fill="none"
      aria-hidden
    >
      <path
        d="M5.43457 0.727539H0.56543V1.27246H5.43457V0.727539Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconPlus({ size = 16, fill = '#000' }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
    >
      <path
        d="M3.72754 7.68262H4.29004V4.27246H7.68262V3.70996H4.29004V0.317383H3.72754V3.70996H0.317383V4.27246H3.72754V7.68262Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconCart({ size = 8, fill = '#000' }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
    >
      <path
        d="M0.500017 0C0.367404 0 0.240223 0.0495797 0.146451 0.137832C0.0526802 0.226084 0 0.34578 0 0.470588C0 0.595396 0.0526802 0.715092 0.146451 0.803344C0.240223 0.891597 0.367404 0.941176 0.500017 0.941176H1.11004L1.26254 1.51624C1.26406 1.52286 1.26572 1.52945 1.26754 1.536L1.94657 4.09129L1.50005 4.51106C0.870029 5.104 1.31604 6.11765 2.20707 6.11765H6.50022C6.63283 6.11765 6.76001 6.06807 6.85378 5.97982C6.94755 5.89156 7.00023 5.77187 7.00023 5.64706C7.00023 5.52225 6.94755 5.40255 6.85378 5.3143C6.76001 5.22605 6.63283 5.17647 6.50022 5.17647H2.20707L2.70709 4.70588H6.0002C6.09303 4.70584 6.18402 4.68147 6.26297 4.6355C6.34192 4.58954 6.40572 4.5238 6.44722 4.44565L7.94726 1.62212C7.98535 1.55039 8.00333 1.47069 7.99949 1.39059C7.99566 1.31049 7.97014 1.23264 7.92536 1.16442C7.88058 1.09621 7.81802 1.03989 7.74362 1.00082C7.66922 0.96175 7.58545 0.941219 7.50025 0.941176H2.14007L1.98507 0.356235C1.95798 0.254472 1.89554 0.164145 1.80766 0.0996025C1.71979 0.0350598 1.61152 2.75785e-06 1.50005 0H0.500017ZM7.00023 7.29412C7.00023 7.48133 6.92121 7.66087 6.78056 7.79325C6.6399 7.92563 6.44913 8 6.25021 8C6.05129 8 5.86052 7.92563 5.71986 7.79325C5.5792 7.66087 5.50018 7.48133 5.50018 7.29412C5.50018 7.10691 5.5792 6.92736 5.71986 6.79498C5.86052 6.6626 6.05129 6.58824 6.25021 6.58824C6.44913 6.58824 6.6399 6.6626 6.78056 6.79498C6.92121 6.92736 7.00023 7.10691 7.00023 7.29412ZM2.25008 8C2.44899 8 2.63977 7.92563 2.78042 7.79325C2.92108 7.66087 3.0001 7.48133 3.0001 7.29412C3.0001 7.10691 2.92108 6.92736 2.78042 6.79498C2.63977 6.6626 2.44899 6.58824 2.25008 6.58824C2.05116 6.58824 1.86038 6.6626 1.71973 6.79498C1.57907 6.92736 1.50005 7.10691 1.50005 7.29412C1.50005 7.48133 1.57907 7.66087 1.71973 7.79325C1.86038 7.92563 2.05116 8 2.25008 8Z"
        fill={fill}
      />
    </svg>
  );
}
