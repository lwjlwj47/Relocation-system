package com.example.move.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 项目房间表
 * @TableName room
 */
@TableName(value ="room")
@Data
public class Room implements Serializable {
    /**
     * 项目房间信息主键
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 房间id
     */
    private String roomId;

    /**
     * 项目id
     */
    private Integer projectId;

    /**
     * 负责人id
     */
    private Integer personalId;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}