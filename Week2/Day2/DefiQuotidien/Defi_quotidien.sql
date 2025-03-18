

-- SELECT * FROM firstTab

-- SELECT * FROM SecondTab
 --   SELECT COUNT(*) 
 --    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
	-- output = 0

	  -- SELECT COUNT(*) 
   --  FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

   -- output count = 2

 --       SELECT COUNT(*) 
 --    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

	-- output count = 0

	--  SELECT COUNT(*) 
 --    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

	-- output count = 2