CREATE TABLE IF NOT EXISTS pies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    crust_type VARCHAR(50) NOT NULL,
    filling VARCHAR(100) NOT NULL,
    is_baked BOOLEAN DEFAULT FALSE,
    slice_count INT DEFAULT 8
);

INSERT INTO pies (name, crust_type, filling, is_baked, slice_count) VALUES
    ('Apple Pie', 'Flaky', 'Apple Cinnamon', TRUE, 8),
    ('Pumpkin Pie', 'Buttery', 'Pumpkin Spice', TRUE, 8),
    ('Blueberry Pie', 'Crumble', 'Blueberry', FALSE, 6),
    ('Chicken Pot Pie', 'Shortcrust', 'Chicken and Vegetables', TRUE, 4);
