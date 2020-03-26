package com.abc.backend.todo.service;

import com.abc.backend.todo.entity.Todos;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class TodoHardCodedServiceTest {
    TodoHardCodedService service = new TodoHardCodedService();
    List<Todos> list;

    @Before
    public void setUp(){
        list = TodoHardCodedService.getTodos();
    }

    @Test
    public void testFindById(){
        Todos todo = service.findById(1);
        Assert.assertNotNull(todo);
    }

    @Test
    public void testListContent(){
        Assert.assertEquals(4, list.size());
    }
}
