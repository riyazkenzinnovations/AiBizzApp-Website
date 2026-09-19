import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const accDir = path.resolve(__dirname, 'src/assets/accounting')
const indDir = path.resolve(__dirname, 'src/assets/industry-images')

const accCopies = [
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (9).jpeg', 'acc_chart_of_accounts.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (8).jpeg', 'acc_general_ledger.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (7).jpeg', 'acc_billing_payables.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (5).jpeg', 'acc_taxes_compliance.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (4).jpeg', 'acc_cost_centers_budget.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (3).jpeg', 'acc_financial_statements.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (2).jpeg', 'acc_asset_management.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM (1).jpeg', 'acc_bank_reconciliation.jpg'],
  ['WhatsApp Image 2026-09-18 at 6.45.31 PM.jpeg', 'acc_multi_company_currency.jpg'],
]

for (const [src, dest] of accCopies) {
  const srcPath = path.join(accDir, src)
  const destPath = path.join(accDir, dest)
  if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
    try { fs.copyFileSync(srcPath, destPath) } catch (e) {}
  }
}

if (fs.existsSync(indDir)) {
  const indCopies = [
    ['engineering.jpeg', 'Manufacturing.jpeg'],
    ['logistics.jpeg', 'Retail.jpeg'],
    ['hospitality.jpeg', 'nonprofit.jpeg']
  ]
  for (const [src, dest] of indCopies) {
    const srcPath = path.join(indDir, src)
    const destPath = path.join(indDir, dest)
    if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
      try { fs.copyFileSync(srcPath, destPath) } catch (e) {}
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
