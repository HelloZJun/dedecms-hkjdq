</p> <p> {dede:field name='typename'/}

{dede:sql sql='Select * from dede_arctype where reid=~id~ ORDER BY id limit 0,10'}

href='[field:typedir function='str_replace("{cmspath}","",@me)'/]' target='_blank'>[field:typename/]

{/dede:sql}

</p> <p>