class NumberUtil {
     public static formatNumber(value: string | number): string {
          const numberValue = Number(value);
          if (isNaN(numberValue) || value === null || value === undefined) {
               return '0';
          }
          return numberValue.toLocaleString(undefined, { maximumFractionDigits: 2 });
     }
}

export default NumberUtil;