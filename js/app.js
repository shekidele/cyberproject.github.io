const CATEGORIES=['Food','Transport','Housing','Utilities','Shopping','Health','Education','Entertainment','Salary','Other'];
const STORE='financeTrackerDataV1';
const BUDGET_STORE='financeTrackerBudgetsV1';
function getTransactions(){return JSON.parse(localStorage.getItem(STORE)||'[]')}
function saveTransactions(items){localStorage.setItem(STORE,JSON.stringify(items))}
function getBudgets(){return JSON.parse(localStorage.getItem(BUDGET_STORE)||'{}')}
function saveBudgets(items){localStorage.setItem(BUDGET_STORE,JSON.stringify(items))}
function money(n){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(n)||0)}
function today(){return new Date().toISOString().slice(0,10)}
function seedDemo(){if(getTransactions().length)return;saveTransactions([
{id:crypto.randomUUID(),type:'income',amount:2500,category:'Salary',date:today(),description:'Monthly salary'},
{id:crypto.randomUUID(),type:'expense',amount:650,category:'Housing',date:today(),description:'Monthly rent'},
{id:crypto.randomUUID(),type:'expense',amount:120,category:'Food',date:today(),description:'Groceries'},
{id:crypto.randomUUID(),type:'expense',amount:60,category:'Transport',date:today(),description:'Transport'},
{id:crypto.randomUUID(),type:'expense',amount:80,category:'Utilities',date:today(),description:'Internet and electricity'}])}
function fillCategories(select,includeAll=false){select.innerHTML=(includeAll?'<option value="">All categories</option>':'')+CATEGORIES.map(c=>`<option>${c}</option>`).join('')}
document.addEventListener('DOMContentLoaded',()=>{seedDemo();const reset=document.getElementById('resetData');if(reset)reset.onclick=()=>{if(confirm('Reset all demo transactions and budgets?')){localStorage.removeItem(STORE);localStorage.removeItem(BUDGET_STORE);location.reload()}}});
