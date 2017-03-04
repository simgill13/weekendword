create table if not exists units (
    id serial primary key,
    name text not null

);

-- insert into recipes (name, description) values ('Khichidi Kadhi', 'Rice and lentils with a yoghurt gravy');
-- insert into recipes (name, description) values ('Congee', 'Rice porridge');
-- insert into recipes (name, description) values ('Kimchi', 'Cabbage and spices');


create table if not exists lessons (
   id serial primary key,
   name text not null,
   unit_id integer references units not null

);

create table if not exists sublesson (
  id serial primary key,
  name text not null,
  lesson_id integer references lessons not null,
  unit_id integer references units not null
);

create table if not exists links (
  id serial primary key,
  url text not null,
  votes integer default 0,
  lesson_id integer references lessons not null,
  unit_id integer references units not null,
  sublesson_id integer references sublesson not null
);
